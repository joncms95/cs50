#include <cs50.h>
#include <stdio.h>

int get_height(void);
void print_blocks(int h);

int main(void)
{
    int n = get_height();
    print_blocks(n);
}

// Get input of the height
int get_height(void)
{
    int h;
    do
    {
        h = get_int("Height: ");
    }
    while (h < 1 || h > 8);
    return h;
}

// Print blocks
void print_blocks(int h)
{
    int r, s, b;
    // Print desired height (r = rows, h = heights)
    for (r = 0; r < h; r++)
    {
        // Set perimeters for the spaces to print (s = spaces)
        for (s = 0; s < h - r - 1; s++)
        {
            printf(" ");
        }

        // Print left pyramid
        for (b = 0; b <= r; b++)
        {
            printf("#");
        }

        // Print gaps between left and right pyramid
        printf("  ");

        // Print right pyramid
        for (b = 0; b <= r; b++)
        {
            printf("#");
        }
        printf("\n");
    }
}