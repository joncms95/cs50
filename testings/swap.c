#include <stdio.h>

int swap_a(int a, int b);
int swap_b(int a, int b);

int main(void)
{
    int x = 1;
    int y = 2;

    printf("x is %i, y is %i\n", x, y);

    int z = swap_a(x, y);
    int j = swap_b(x, y);

    printf("x is %i, y is %i\n", z, j);
}

int swap_a(int a, int b)
{
    int tmp = a;
    a = b;
    b = tmp;

    return a;
}

int swap_b(int a, int b)
{
    int tmp = a;
    a = b;
    b = tmp;

    return b;
}