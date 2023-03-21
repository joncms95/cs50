#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    // Check that argument count is = 2
    if (argc != 2)
    {
        printf("Usage: ./recover IMAGE\n");
        return 1;
    }

    // Open file for reading
    FILE *inptr = fopen(argv[1], "r");

    // Check that file is valid
    if (inptr == NULL)
    {
        printf("Could not open file");
        return 2;
    }

    // Store blocks of 512 bytes in an array
    BYTE buffer[512];

    // Track number of images generated
    int image_counter = 0;

    // File pointer for recovered images
    FILE *outptr = NULL;

    // Malloc for file name
    char *filename = malloc(8 * sizeof(BYTE));

    // Read the blocks of 512 bytes
    while (fread(buffer, sizeof(BYTE), 512, inptr))
    {
        // Check if the bytes indicate the header of JPEG
        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0)
        {
            if (image_counter > 0)
            {
                fclose(outptr);
            }

            // Write the JPEG filenames, Count number of images found
            sprintf(filename, "%03i.jpg", image_counter++);

            // Open outptr for writing
            outptr = fopen(filename, "w");

        }
        // Check if output has been used for valid input
        if (outptr != NULL)
        {
            fwrite(buffer, sizeof(BYTE), 512, outptr);
        }
    }
    free(filename);
    fclose(outptr);
    fclose(inptr);

    return 0;
}