-- Keep a log of any SQL queries you execute as you solve the mystery.

-- The theft took place on July 28, 2021 and that it took place on Humphrey Street.
SELECT description
  FROM crime_scene_reports
 WHERE year = 2021
   AND month = 7
   AND day = 28
   AND street = 'Humphrey Street';

/* Theft of the CS50 duck took place at 10:15am at the Humphrey Street bakery.
Interviews were conducted today with three witnesses who were present at the time – each of their interview transcripts mentions the bakery. */
SELECT transcript
  FROM interviews
 WHERE year = 2021
   AND month = 7
   AND day = 28
   AND transcript LIKE '%bakery%';

-- Based on the transcripts we found,
-- #1
/* Sometime within ten minutes of the theft, I saw the thief get into a car in the bakery parking lot and drive away.
If you have security footage from the bakery parking lot, you might want to look for cars that left the parking lot in that time frame. */

-- Find the name of the people through the bakery security logs
SELECT people.name, bakery_security_logs.license_plate
  FROM people
       JOIN bakery_security_logs ON bakery_security_logs.license_plate = people.license_plate
 WHERE year = 2021
   AND month = 7
   AND day = 28
   AND hour = 10
   AND minute >= 15
   AND minute <= 25;

-- #2
/* I don't know the thief's name, but it was someone I recognized.
Earlier this morning, before I arrived at Emma's bakery, I was walking by the ATM on Leggett Street and saw the thief there withdrawing some money.*/

-- Find the name of the people that are withdrawing money from the atm at Leggett Street
SELECT people.name, atm_transactions.transaction_type
  FROM people
       JOIN bank_accounts ON bank_accounts.person_id = people.id

       JOIN atm_transactions ON atm_transactions.account_number = bank_accounts.account_number
 WHERE atm_transactions.year = 2021
   AND atm_transactions.month = 7
   AND atm_transactions.day = 28
   AND atm_location = 'Leggett Street'
   AND atm_transactions.transaction_type = 'withdraw';

-- #3
/* As the thief was leaving the bakery, they called someone who talked to them for less than a minute.
In the call, I heard the thief say that they were planning to take the earliest flight out of Fiftyville tomorrow.
The thief then asked the person on the other end of the phone to purchase the flight ticket. */

-- Find the phone call caller and phone call receiver during the timeframe
SELECT phone_calls.caller, caller_people.name, phone_calls.receiver, receiver_people.name
  FROM phone_calls
       JOIN people AS caller_people ON caller_people.phone_number = phone_calls.caller

       JOIN people AS receiver_people ON receiver_people.phone_number = phone_calls.receiver
 WHERE year = 2021
   AND month = 7
   AND day = 28
   AND duration < 60;

-- Find the name of the people on the earliest flight on the next day and the destination airport
SELECT people.name, destination_airports.city
  FROM people
       JOIN passengers ON passengers.passport_number = people.passport_number

       JOIN flights ON flights.id = passengers.flight_id

       JOIN airports AS destination_airports ON destination_airports.id = flights.destination_airport_id
 WHERE flights.id =
       (SELECT flights.id
          FROM flights
               JOIN airports ON airports.id = flights.origin_airport_id
         WHERE airports.city = 'Fiftyville'
           AND flights.year = 2021
           AND flights.month = 7
           AND flights.day = 29
         ORDER BY hour ASC
         LIMIT 1);

-- After collecting all the data, we just have to bring them all together
-- Find the Thief
SELECT name
  FROM people
       JOIN passengers ON passengers.passport_number = people.passport_number

       JOIN flights ON flights.id = passengers.flight_id
 WHERE flights.id =
       (SELECT flights.id
          FROM flights
               JOIN airports ON airports.id = flights.origin_airport_id
         WHERE airports.city = 'Fiftyville'
           AND flights.year = 2021
           AND flights.month = 7
           AND flights.day = 29
         ORDER BY hour ASC
         LIMIT 1)
   AND name IN
        (SELECT people.name
           FROM people
                JOIN bakery_security_logs ON bakery_security_logs.license_plate = people.license_plate
          WHERE year = 2021
            AND month = 7
            AND day = 28
            AND hour = 10
            AND minute >= 15
            AND minute <= 25)
   AND name IN
        (SELECT people.name
           FROM people
                JOIN bank_accounts ON bank_accounts.person_id = people.id

                JOIN atm_transactions ON atm_transactions.account_number = bank_accounts.account_number
          WHERE atm_transactions.year = 2021
            AND atm_transactions.month = 7
            AND atm_transactions.day = 28
            AND atm_location = 'Leggett Street'
            AND atm_transactions.transaction_type = 'withdraw')
   AND name IN
        (SELECT caller_people.name
           FROM phone_calls
                JOIN people AS caller_people ON caller_people.phone_number = phone_calls.caller

                JOIN people AS receiver_people ON receiver_people.phone_number = phone_calls.receiver
          WHERE year = 2021
            AND month = 7
            AND day = 28
            AND duration < 60);

/* Bruce is the only person whose name is in every single SQL query, thus he is the thief of the stolen duck.
We can also find his accomplice by looking at the phone call receiver from the call made from Bruce. */