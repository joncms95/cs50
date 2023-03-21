#include <stdio.h>

int main(void)
{
    char *s = "HI!";
    printf("%s\n", s);
    printf("%p\n", s);
    printf("%p\n", &s[0]);
    printf("%c\n", s[0]);
    printf("%c\n", *s);
    printf("%c\n", s[1]);
    printf("%c\n", *(s+1));
}