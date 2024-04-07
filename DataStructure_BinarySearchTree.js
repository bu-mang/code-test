/*
  이런 느낌
      5
    3     8
  1  4  7

  종류로는 Full, Complete, Degenerate, Balanced 등이 있다.

  Full : 자식이 0이거나 2개인 노드를 얘기한다.

  Perfect : leaf들이 같은 레벨이다. 그리고 가득 차 있다.

  Complete : 왼쪽부터 데이터를 채워나가게 되는데, 이 순서에 따라 채워지고 있는 트리는 Complete 트리이다. (데이터를 순서대로 넣을 때 보장된다.)

  degenerate : 자식이 무조건 하나인 트리 (선형이다. 가장 비효율적인 바이너리 트리이다. 그냥 링크드 리스트랑 다를게 없다.)

  balanced : diff가 1이하인거.

  Perfect와 Complete는 Balanced일 수 밖에 없다.
  
  이밖에도 AVL트리나 RedBlack트리도 트리구조이다.
*/
