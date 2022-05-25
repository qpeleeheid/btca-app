import { Color, Orientation } from './Arrows';

enum Direction {
  Above = 'above',
  Under = 'under',
}

interface Rule {
  topElement: string;
  botElement: string;
  direction: Direction;

  getString(): string;
}

const frenchColorMap: Map<Color, String> = new Map([
  [Color.Black, 'Noir'],
  [Color.White, 'Blanc'],
]);
const frenchOrientationMap: Map<Orientation, String> = new Map([
  [Orientation.TopRight, 'Droite Haut'],
  [Orientation.TopLeft, 'Gauche Haut'],
  [Orientation.BotRight, 'Droite Bas'],
  [Orientation.BotLeft, 'Gauche Bas'],
]);
const frenchDirectionMap: Map<Direction, String> = new Map([
  [Direction.Above, 'AU-DESSUS'],
  [Direction.Under, 'EN-DESSOUS'],
]);

class ColorRule implements Rule {
  topElement: Color;
  botElement: Color;
  direction: Direction;

  constructor(topColor: Color, botColor: Color, direction: Direction) {
    this.topElement = topColor;
    this.botElement = botColor;
    this.direction = direction;
  }

  getString(): string {
    switch (this.direction) {
      case Direction.Above: {
        return `${frenchColorMap.get(this.topElement)} ${frenchDirectionMap.get(
          this.direction
        )} ${frenchColorMap.get(this.botElement)}`;
      }
      case Direction.Under: {
        return `${frenchColorMap.get(this.botElement)} ${frenchDirectionMap.get(
          this.direction
        )} ${frenchColorMap.get(this.topElement)}`;
      }
    }
  }
}

class OrientationRule implements Rule {
  topElement: Orientation;
  botElement: Orientation;
  direction: Direction;

  constructor(
    topOrientation: Orientation,
    botOrientation: Orientation,
    direction: Direction
  ) {
    this.topElement = topOrientation;
    this.botElement = botOrientation;
    this.direction = direction;
  }

  getString(): string {
    switch (this.direction) {
      case Direction.Above: {
        return `${frenchOrientationMap.get(
          this.topElement
        )} ${frenchDirectionMap.get(this.direction)} ${frenchOrientationMap.get(
          this.botElement
        )}`;
      }
      case Direction.Under: {
        return `${frenchOrientationMap.get(
          this.botElement
        )} ${frenchDirectionMap.get(this.direction)} ${frenchOrientationMap.get(
          this.topElement
        )}`;
      }
    }
  }
}

export { Direction, ColorRule, OrientationRule };
export type { Rule };
