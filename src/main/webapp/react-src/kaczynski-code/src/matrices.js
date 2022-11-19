var unabomberMatrix = [
    [4, 7, 7, 0, 1, 3, 81, 22, 11, 13, 13, 44, 41, 6, 16, 22, 21, 19, 17, 28, 30, 29, 30, 31, 31, 42, 43, 2, 5, 7, 6, 9, 12, 15, 18, 65, 71, 77, 84, 83, 80, 32],
    [47, 19, 48, 45, 49, 51, 62, 74, 79, 16, 50, 59, 41, 63, 61, 64, 78, 1, 76, 0, 37, 39, 40, 60, 67, 70, 4, 10, 3, 52, 55, 54, 56, 69, 68, 38, 31, 34, 36, 50, 35, 5],
    [24, 23, 27, 4, 11, 11, 2, 16, 19, 21, 30, 1, 41, 1, 52, 1, 0, 18, 40, 51, 6, 68, 84, 80, 2, 19, 23, 23, 58, 76, 67, 8, 8, 81, 17, 36, 63, 83, 79, 79, 70, 71],
    [62, 4, 7, 68, 1, 3, 54, 45, 55, 9, 17, 18, 1, 3, 12, 14, 71, 33, 8, 54, 16, 9, 40, 57, 6, 25, 23, 50, 26, 40, 11, 12, 12, 60, 15, 35, 55, 80, 77, 21, 57, 64],
    [1, 3, 2, 4, 3, 5, 4, 6, 11, 7, 61, 63, 62, 64, 63, 65, 0, 10, 14, 29, 39, 43, 34, 3, 30, 31, 65, 70, 76, 74, 73, 2, 16, 83, 9, 9, 8, 27, 5, 75, 1, 8],
    [61, 54, 38, 21, 25, 69, 6, 79, 4, 0, 6, 46, 12, 56, 8, 7, 1, 1, 2, 3, 5, 8, 13, 18, 26, 39, 57, 83, 2, 1, 3, 4, 7, 11, 18, 25, 36, 54, 79, 80, 1, 5],
    [4, 83, 79, 80, 1, 5, 6, 11, 56, 2, 5, 7, 2, 9, 11, 6, 5, 3, 4, 0, 2, 1, 8, 8, 9, 7, 8, 1, 0, 6, 7, 5, 42, 19, 13, 15, 8, 1, 0, 3, 76, 72],
    [84, 1, 4, 72, 9, 6, 8, 68, 43, 32, 34, 39, 37, 35, 5, 4, 70, 66, 4, 62, 34, 28, 6, 22, 16, 8, 8, 0, 16, 24, 40, 64, 82, 60, 54, 39, 71, 41, 31, 6, 0, 6],
    [12, 18, 30, 48, 78, 30, 48, 18, 30, 12, 18, 6, 12, 6, 6, 0, 9, 9, 20, 48, 81, 49, 27, 17, 13, 23, 22, 42, 33, 63, 63, 2, 5, 1, 7, 0, 15, 3, 8, 3, 4, 9],
    [1, 2, 68, 61, 47, 74, 64, 68, 81, 80, 5, 45, 52, 67, 68, 70, 20, 11, 16, 14, 2, 25, 61, 71, 41, 24, 31, 42, 48, 46, 54, 29, 7, 9, 8, 66, 54, 45, 44, 72, 28, 3],
    [31, 34, 3, 37, 40, 4, 60, 62, 62, 9, 8, 0, 15, 20, 84, 81, 81, 0, 1, 1, 0, 5, 9, 12, 7, 8, 3, 2, 6, 13, 48, 58, 63, 57, 81, 12, 14, 21, 35, 56, 42, 21],
    [14, 35, 49, 7, 1, 4, 9, 16, 25, 35, 48, 63, 80, 79, 62, 47, 34, 24, 15, 83, 3, 0, 7, 1, 3, 6, 10, 16, 22, 40, 50, 60, 70, 80, 7, 8, 9, 2, 3, 4, 1, 5],
    [6, 5, 15, 25, 35, 45, 55, 65, 75, 1, 7, 8, 0, 1, 2, 2, 9, 19, 29, 39, 49, 59, 69, 79, 77, 67, 56, 46, 36, 26, 15, 16, 13, 1, 2, 3, 64, 50, 54, 52, 8, 11],
    [23, 28, 38, 32, 33, 44, 17, 29, 49, 72, 73, 1, 7, 9, 7, 0, 21, 66, 18, 49, 49, 17, 14, 4, 7, 7, 0, 1, 81, 3, 22, 11, 13, 13, 44, 41, 16, 6, 22, 21, 17, 30],
    [30, 31, 43, 42, 2, 7, 9, 15, 65, 77, 83, 32, 47, 45, 62, 16, 41, 64, 1, 0, 39, 67, 10, 55, 69, 31, 36, 35, 19, 49, 74, 50, 63, 78, 0, 40, 67, 4, 3, 55, 69, 31],
    [50, 33, 13, 47, 43, 5, 8, 5, 19, 58, 42, 46, 67, 78, 68, 0, 80, 1, 22, 20, 4, 71, 72, 11, 2, 0, 8, 5, 9, 4, 2, 7, 3, 6, 1, 2, 2, 0, 3, 61, 38, 25],
    [6, 4, 6, 12, 8, 1, 3, 13, 39, 2, 4, 18, 36, 79, 5, 84, 72, 8, 32, 37, 5, 70, 4, 34, 6, 16, 0, 40, 60, 39, 41, 6, 6, 2, 47, 68, 34, 37, 5, 70, 4, 28],
    [1, 2, 5, 6, 61, 64, 65, 14, 39, 3, 31, 76, 73, 83, 9, 5, 55, 82, 71, 75, 63, 65, 34, 38, 35, 29, 66, 75, 76, 1, 1, 2, 1, 3, 0, 5, 10, 30, 20, 40, 18, 7],
    [4, 24, 74, 39, 8, 26, 49, 28, 21, 41, 31, 51, 71, 61, 10, 15, 14, 64, 18, 54, 3, 1, 2, 0, 7, 38, 19, 83, 2, 84, 1, 9, 24, 24, 16, 80, 2, 1, 4, 14, 21, 24],
    [4, 24, 47, 62, 1, 4, 61, 84, 17, 6, 73, 84, 66, 8, 10, 48, 50, 4, 6, 40, 42, 76, 78, 17, 66, 11, 60, 5, 54, 0, 49, 5, 54, 10, 59, 15, 64, 20, 69, 25, 74, 30],
    [79, 4, 53, 22, 71, 40, 4, 27, 8, 31, 12, 35, 16, 39, 20, 18, 19, 84, 81, 0, 5, 5, 10, 15, 15, 20, 17, 17, 24, 31, 35, 36, 41, 44, 48, 52, 56, 61, 66, 72, 78, 1],
    [8, 4, 12, 16, 17, 18, 19, 25, 26, 28, 30, 32, 35, 7, 0, 7, 20, 9, 11, 6, 80, 26, 5, 5, 16, 1, 7, 48, 81, 71, 72, 27, 16, 7, 23, 6, 29, 11, 40, 4, 44, 8],
    [65, 26, 37, 50, 0, 19, 82, 5, 26, 37, 50, 1, 5, 2, 3, 7, 1, 0, 6, 8, 9, 9, 6, 11, 27, 14, 8, 13, 21, 25, 28, 35, 45, 53, 62, 70, 78, 1, 16, 17, 24, 32],
    [38, 43, 54, 61, 70, 77, 84, 13, 25, 29, 36, 47, 56, 67, 78, 6, 61, 70, 12, 79, 16, 2, 18, 34, 0, 1, 2, 1, 5, 1, 7, 7, 9, 19, 8, 20, 50, 45, 58, 8, 60, 3],
    [0, 18, 3, 42, 45, 71, 8, 59, 1, 8, 4, 1, 1, 4, 9, 2, 1, 0, 6, 6, 15, 84, 18, 12, 19, 84, 1, 9, 8, 4, 19, 4, 2, 22, 13, 31, 3, 12, 25, 1, 1, 28],
    [3, 1, 2, 22, 47, 69, 34, 1, 15, 8, 21, 37, 52, 51, 43, 10, 25, 67, 65, 3, 7, 1, 2, 7, 3, 4, 1, 3, 2, 8, 9, 37, 12, 73, 41, 32, 4, 71, 27, 34, 13, 28],
    [4, 21, 1, 20, 25, 2, 27, 58, 11, 14, 4, 48, 73, 18, 71, 37, 34, 3, 37, 2, 7, 11, 22, 21, 44, 46, 49, 31, 16, 72, 69, 8, 56, 73, 1, 53, 26, 79, 46, 0, 3, 71],
    [7, 23, 24, 2, 22, 47, 7, 54, 4, 2, 13, 1, 72, 11, 7, 36, 18, 1, 5, 6, 4, 12, 15, 29, 27, 30, 20, 47, 8, 37, 75, 8, 45, 41, 19, 2, 21, 13, 34, 2, 36, 54],
    [24, 44, 27, 45, 3, 42, 72, 4, 76, 12, 4, 47, 1, 7, 64, 1, 16, 7, 1, 7, 10, 6, 15, 19, 19, 11, 41, 64, 32, 72, 48, 28, 11, 72, 68, 83, 5, 0, 12, 12, 84, 7],
    [31, 29, 51, 50, 69, 5, 64, 19, 16, 35, 9, 44, 71, 4, 58, 35, 2, 8, 6, 2, 9, 14, 8, 11, 9, 61, 35, 5, 3, 46, 17, 36, 41, 1, 2, 6, 68, 13, 81, 84, 75, 47],
    [56, 73, 53, 0, 77, 19, 8, 11, 16, 46, 62, 3, 65, 3, 6, 0, 14, 15, 7, 9, 1, 11, 8, 2, 31, 29, 27, 67, 2, 11, 35, 37, 67, 81, 0, 18, 64, 3, 34, 37, 9, 46],
    [0, 2, 1, 82, 6, 27, 8, 8, 0, 35, 44, 79, 6, 1, 52, 36, 83, 23, 13, 11, 10, 3, 7, 30, 6, 58, 57, 44, 75, 21, 4, 44, 80, 6, 50, 4, 2, 16, 19, 47, 66, 1],
    [55, 1, 54, 82, 35, 46, 24, 27, 16, 11, 42, 8, 50, 2, 52, 29, 79, 22, 12, 20, 11, 14, 1, 23, 51, 10, 83, 59, 14, 33, 23, 1, 83, 42, 60, 1, 9, 64, 84, 7, 48, 55],
    [65, 0, 4, 62, 41, 32, 32, 51, 26, 24, 2, 77, 79, 11, 0, 7, 4, 23, 30, 14, 21, 17, 8, 7, 47, 79, 16, 7, 59, 21, 79, 2, 8, 55, 1, 7, 39, 45, 5, 44, 75, 49],
    [7, 1, 5, 3, 56, 78, 67, 78, 66, 53, 40, 13, 20, 33, 53, 22, 75, 50, 25, 35, 18, 31, 9, 30, 4, 79, 7, 48, 2, 40, 81, 34, 52, 0, 2, 25, 42, 2, 35, 55, 4, 18],
    [5, 1, 9, 8, 2, 7, 0, 8, 2, 0, 79, 64, 15, 30, 45, 29, 79, 39, 56, 35, 39, 16, 17, 37, 51, 0, 11, 19, 39, 76, 62, 3, 1, 5, 14, 3, 3, 9, 20, 1, 23, 2],
    [6, 12, 14, 11, 74, 78, 74, 2, 40, 53, 84, 33, 5, 28, 50, 78, 64, 0, 53, 70, 25, 47, 41, 67, 55, 79, 18, 67, 41, 11, 19, 37, 53, 5, 16, 28, 45, 11, 55, 56, 27, 20],
    [11, 22, 13, 19, 76, 82, 4, 40, 42, 6, 48, 35, 45, 2, 43, 80, 56, 2, 14, 41, 64, 78, 1, 55, 4, 2, 29, 5, 80, 5, 81, 40, 54, 10, 30, 31, 47, 20, 75, 57, 50, 22],
    [17, 34, 9, 1, 0, 7, 80, 11, 82, 59, 40, 68, 52, 78, 7, 71, 13, 84, 66, 7, 11, 68, 0, 83, 20, 13, 46, 3, 24, 8, 21, 59, 26, 58, 76, 58, 75, 0, 84, 70, 15, 1],
    [47, 56, 22, 82, 11, 3, 84, 3, 14, 65, 3, 54, 7, 6, 80, 9, 81, 28, 71, 6, 69, 55, 3, 22, 42, 51, 83, 29, 5, 61, 6, 36, 8, 7, 17, 23, 75, 0, 10, 37, 1, 4],
    [54, 23, 31, 83, 83, 9, 2, 14, 1, 71, 43, 8, 13, 84, 22, 19, 16, 3, 42, 13, 55, 17, 42, 55, 80, 7, 53, 13, 82, 65, 62, 66, 83, 75, 3, 75, 84, 80, 52, 2, 58, 3],
    [17, 9, 8, 0, 4, 5, 28, 17, 15, 7, 15, 62, 20, 31, 5, 44, 26, 25, 1, 70, 20, 64, 45, 5, 15, 82, 18, 7, 71, 4, 74, 8, 20, 26, 14, 84, 1, 0, 3, 62, 42, 5],
    [53, 33, 20, 13, 7, 14, 18, 4, 16, 78, 75, 3, 33, 7, 60, 63, 67, 45, 41, 4, 78, 81, 1, 22, 7, 31, 2, 9, 66, 13, 0, 6, 29, 2, 82, 81, 52, 5, 7, 45, 30, 9],
    [65, 63, 2, 61, 42, 19, 46, 23, 3, 5, 1, 64, 12, 38, 65, 0, 1, 9, 71, 66, 5, 11, 46, 27, 22, 9, 20, 16, 8, 17, 74, 14, 49, 28, 82, 52, 53, 5, 10, 35, 72, 8],
    [0, 66, 62, 4, 58, 50, 8, 27, 80, 4, 76, 67, 0, 5, 5, 63, 50, 54, 1, 82, 73, 9, 15, 24, 27, 29, 82, 21, 17, 80, 43, 51, 78, 30, 0, 58, 12, 55, 65, 81, 19, 0],
    [68, 1, 46, 77, 7, 31, 30, 50, 83, 0, 79, 8, 12, 5, 64, 63, 51, 67, 72, 84, 16, 2, 14, 26, 78, 44, 29, 37, 25, 57, 40, 65, 3, 58, 82, 17, 65, 60, 75, 27, 18, 7],
    [78, 8, 70, 43, 27, 16, 11, 5, 6, 4, 8, 17, 12, 10, 8, 6, 9, 8, 1, 3, 17, 24, 1, 23, 41, 64, 71, 58, 42, 2, 83, 33, 58, 11, 29, 75, 77, 0, 46, 18, 37, 7],
    [3, 9, 50, 30, 46, 61, 5, 55, 83, 4, 19, 17, 74, 15, 72, 76, 80, 75, 73, 19, 33, 27, 40, 3, 37, 67, 68, 19, 67, 59, 36, 1, 61, 69, 14, 5, 75, 60, 36, 45, 55, 0],
    [81, 17, 57, 73, 74, 77, 16, 60, 12, 36, 27, 34, 23, 78, 89, 82, 76, 76, 74, 21, 28, 51, 44, 64, 4, 60, 12, 21, 38, 69, 59, 72, 84, 80, 43, 80, 34, 60, 82, 63, 62, 6],
    [84, 23, 20, 66, 82, 71, 21, 77, 16, 40, 6, 41, 0, 1, 1, 9, 3, 9, 54, 40, 61, 47, 84, 71, 8, 7, 1, 27, 18, 42, 2, 73, 0, 48, 57, 3, 39, 1, 4, 62, 6, 1],
    [9, 40, 77, 4, 6, 1, 37, 0, 28, 76, 33, 78, 23, 83, 4, 79, 79, 7, 68, 0, 12, 5, 75, 2, 19, 20, 11, 9, 24, 0, 83, 8, 84, 72, 37, 83, 73, 61, 0, 12, 68, 11],
    [60, 63, 3, 70, 24, 72, 58, 77, 44, 74, 39, 24, 84, 84, 82, 8, 61, 16, 12, 59, 9, 52, 6, 26, 27, 38, 9, 18, 79, 54, 63, 59, 10, 40, 84, 74, 65, 62, 18, 69, 74, 8],
    [69, 0, 80, 74, 30, 73, 4, 61, 72, 1, 72, 47, 67, 1, 86, 68, 15, 12, 80, 59, 1, 8, 81, 28, 49, 58, 42, 36, 29, 7, 12, 8, 4, 12, 16, 28, 44, 72, 5, 81, 18, 2],
    [3, 63, 83, 1, 54, 2, 62, 4, 3, 75, 0, 71, 4, 2, 0, 76, 24, 9, 68, 8, 10, 3, 55, 54, 76, 60, 51, 83, 56, 47, 9, 11, 15, 77, 3, 43, 53, 72, 4, 31, 21, 2]];

export default unabomberMatrix;