#include <cs50.h>
#include <stdio.h>
#include <string.h>

const int BITS_IN_BYTE = 8;

void print_bulb(int bit);

int main(void)
{
    // Get user message
    string message = get_string("Message: ");

    // Iterate through each character of the string input
    for (int i = 0; i < strlen(message); i++)
    {
        int binary[BITS_IN_BYTE];

        // Convert characters into ASCII
        int ascii = message[i];

        // Convert ASCII into binary
        for (int j = 0; j < BITS_IN_BYTE; j++)
        {
            binary[j] = ascii % 2;
            ascii /= 2;
        }

        // Print the binary in reverse
        for (int k = BITS_IN_BYTE - 1; k >= 0; k--)
        {
            print_bulb(binary[k]);
        }
        printf("\n");
    }
}

void print_bulb(int bit)
{
    if (bit == 0)
    {
        // Dark emoji
        printf("\U000026AB");
    }
    else if (bit == 1)
    {
        // Light emoji
        printf("\U0001F7E1");
    }
}
