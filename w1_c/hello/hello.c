#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Ask User for his name
    string name = get_string("What's your name? ");

    // Print out hello, "username"
    printf("hello, %s\n", name);
}