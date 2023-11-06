abstract class MovieCalculator {
  protected type;
  protected count;

  constructor(type: '스릴러' | '코믹' | '로맨스', count: number) {
    this.type = type;
    this.count = count;
  }

  abstract get 영화가격(): number;
  abstract get 마일리지(): number;
}

class 스릴러_계산기 extends MovieCalculator {
  get 영화가격() {
    return 10_000 * this.count;
  }

  get 마일리지() {
    return 100 * this.count;
  }
}

class 코믹_계산기 extends MovieCalculator {
  get 영화가격() {
    return 8_000 * this.count;
  }

  get 마일리지() {
    return 80 * this.count;
  }
}

class 로맨스_계산기 extends MovieCalculator {
  get 영화가격() {
    return 12_000 * this.count;
  }

  get 마일리지() {
    return 120 * this.count;
  }
}

function createMovieCalculatorFactory(
  type: '스릴러' | '코믹' | '로맨스',
  count: number
) {
  if (type === '스릴러') {
    return new 스릴러_계산기(type, count);
  }
  if (type === '코믹') {
    return new 코믹_계산기(type, count);
  }
  if (type === '로맨스') {
    return new 로맨스_계산기(type, count);
  }
}
