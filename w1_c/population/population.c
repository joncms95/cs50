#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n, n2, y;

    // TODO: Prompt for start size
    do
    {
        n = get_int("Start size: ");
    }
    while (n < 9);

    // TODO: Prompt for end size
    do
    {
        n2 = get_int("End size: ");
    }
    while (n2 < n);

    // TODO: Calculate number of years until we reach threshold
    for (y = 0; n < n2; y++)
    {
        n = n + (n / 3) - (n / 4);
    }

    // TODO: Print number of years
    {
        printf("Years: %i\n", y);
    }
}