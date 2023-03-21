// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#include <strings.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// TODO: Choose number of buckets in hash table
const unsigned int N = 1000;

// Hash table
node *table[N];

// Declare variables
int word_count = 0;
int hash_value = 0;

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO
    // Hash the word to obtain the hash value
    hash_value = hash(word);
    node *n = table[hash_value];

    // Go through linked list
    while (n != NULL)
    {
        if (strcasecmp(word, n->word) == 0)
        {
            return true;
        }
        n = n->next;
    }
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    long sum = 0;
    for (int i = 0; i < strlen(word); i++)
    {
        sum += tolower(word[i]);
    }
    return sum % N;
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // TODO
    FILE *file = fopen(dictionary, "r");

    if (file == NULL)
    {
        printf("Unable to open %s\n", dictionary);
        return false;
    }

    // Declare variable for to store words from dictionary
    char dic_word[LENGTH + 1];

    // Scan dictionary for words until EOF
    while (fscanf(file, "%s", dic_word) != EOF)
    {
        // Allocate memory for new node
        node *n = malloc(sizeof(node));

        if (n == NULL)
        {
            return false;
        }

        // Copy word from dictionary into node
        strcpy(n->word, dic_word);

        // Hash the word copied
        hash_value = hash(dic_word);
        n->next = table[hash_value];
        table[hash_value] = n;
        word_count++;
    }
    fclose(file);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return word_count;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    // TODO
    for (int i = 0; i < N; i++)
    {
        node *n = table[i];
        while (n)
        {
            node *tmp = n;
            n = n->next;
            free(tmp);
        }
    }
    return true;
}
