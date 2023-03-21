# TODO
# Main Function
while True:
      try:
           team = int(input("Number: "))
           if team > 10:
               print("Team 1 has won!")
               break
      except:
           print("Not an integer")