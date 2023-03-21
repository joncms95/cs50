#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <math.h>

int count_letters(string text);

int main(void)
{
    // Get text from user
    string text = get_string("Text: ");

    // Count letters, words, sentences to calculate the grade
    int grade = count_letters(text);

    // Tell user the approximate grade of text
    if (grade < 1)
    {
        printf("Before Grade 1\n");
    }

    else if (grade > 16)
    {
        printf("Grade 16+\n");
    }

    else
    {
        printf("Grade %i\n", grade);
    }
}

// functions
int count_letters(string text)
{
    int index = 0;
    int i;
    int letters = 0;
    int words = 1;
    int sentences = 0;

    // Calculate number of letters, words and sentences
    for (i = 0; i < strlen(text); i++)
    {
        if isalpha(text[i])
        {
            letters++;
        }

        else if isspace(text[i])
        {
            words++;
        }

        else if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            sentences++;
        }

        // Calculate grade with the Coleman-Liau index
        float L = (float) letters / (float) words * 100;
        float S = (float) sentences / (float) words * 100;
        index = round(0.0588 * L - 0.296 * S - 15.8);
    }
    return index;
}