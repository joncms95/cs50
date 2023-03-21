# TODO
# Main Function for Mario (Less)
def main():
    height = get_height()
    for i in range(height):
        for j in range(height):
            if (i + j < height - 1):
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