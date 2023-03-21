#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // TODO: Prompt for start size
    int n;
    do
    {
        n = get_int("Start size: ");
    }
    while (n < 9);

    // TODO: Prompt for end size
    int n2;
    do
    {
        n2 = get_int("End size: ");
    }
    while (n2 < n);

    // TODO: Calculate number of years until we reach threshold
    int y = 0;
    while (n2 > n)
    {
        n = n + (n / 3) - (n / 4);
        y++;
    }

    // TODO: Print number of years
    printf("Years: %i\n", y);
}