#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long n = get_long_long("Number: ");
    printf("Number: %lu\n", n);
    printf("Size of long: %lu\n", sizeof(long));
}