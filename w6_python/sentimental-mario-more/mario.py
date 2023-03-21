# TODO
# Main Function for Mario (Less)
def main():
    n = get_height()
    for i in range(0, n, 1):
        for j in range(0, n+i+3, 1):
            if (j == n or j == n+1 or i+j < n-1):
                print(" ", end="")
            else:
                print("#", end="")
        print()


# Function definition get_height
def get_height():
    while True:
        try:
            n = int(input("Height: "))
            if n > 0 and n < 9:
                return n
        # Handle cases where user input something other than integers
        except ValueError:
            print("Not an integer")


main()