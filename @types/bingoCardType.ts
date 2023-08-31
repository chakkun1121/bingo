// bingoのB列は1~15
export type bingoBRowType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;
// bingoのI列は16~30
export type bingoIRowType =
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30;
// bingoのN列は31~45
export type bingoNRowType =
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45;
// bingoのG列は46~60
export type bingoGRowType =
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60;
// bingoのO列は61~75
export type bingoORowType =
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75;
export type bingoCardType = [
  [bingoBRowType, bingoIRowType, bingoNRowType, bingoGRowType, bingoORowType],
  [bingoBRowType, bingoIRowType, bingoNRowType, bingoGRowType, bingoORowType],
  [bingoBRowType, bingoIRowType, null, bingoGRowType, bingoORowType],
  [bingoBRowType, bingoIRowType, bingoNRowType, bingoGRowType, bingoORowType],
  [bingoBRowType, bingoIRowType, bingoNRowType, bingoGRowType, bingoORowType]
];
