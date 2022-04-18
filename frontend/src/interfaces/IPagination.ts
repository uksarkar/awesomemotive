export default interface IPagination {
  currentIndex: number;
  totalPage: number;
  bubbleLimit?: number;
  onPaginate: (index: number) => void;
}
