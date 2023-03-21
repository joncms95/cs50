# TODO
# Main Function
def main():
    cents = get_cents()
    print_count(cents)


# Get input on Change from user
def get_cents():
    while True:
        try:
            cents = float(input("Change: "))
            if cents > 0:
                cents = round(cents*100)
                return cents
        # Handle cases where user input something other than integers
        except ValueError:
            print("Not an integer")


# Calculate total coins and print out total coins
def print_count(cents):
    count = 0

    while cents >= 25:
        cents = cents - 25
        count += 1

    while cents >= 10:
        cents = cents - 10
        count += 1

    while cents >= 5:
        cents = cents - 5
        count += 1

    while cents >= 1:
        cents = cents - 1
        count += 1

    print("Total coins: ", count)


main()