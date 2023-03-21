# TODO
# Main Function
def main():
    text = str(input("Text: "))
    calculate_grade(text)


# Count the number of letters, words and sentences
def calculate_grade(text):
    letters = 0
    words = 1
    sentences = 0

    for i in text:
        if i.isalpha():
            letters += 1
        elif i == " ":
            words += 1
        elif i == "." or i == "!" or i == "?":
            sentences += 1

    # Calculate grade with the Coleman-Liau index
    index = 0.0588 * (letters/words*100) - 0.296 * (sentences/words*100) - 15.8

    # Tell user the approximate grade of text
    if index < 1:
        print("Before Grade 1")
    elif index > 16:
        print("Grade 16+")
    else:
        print(f"Grade {round(index)}")


if __name__ == "__main__":
    main()
