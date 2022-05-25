enum Orientation {
  TopRight = 'Top Right',
  TopLeft = 'Top Left',
  BotRight = 'Bot Right',
  BotLeft = 'Bot Left',
}

enum Color {
  Black = 'Black',
  White = 'White',
}

class Arrow {
  orientation: Orientation;
  color: Color;
  icon;

  constructor(orientation: Orientation, color: Color, icon: string) {
    this.orientation = orientation;
    this.color = color;
    this.icon = icon;
  }
}

const BlackArrows: Array<Arrow> = [
  new Arrow(
    Orientation.TopRight,
    Color.Black,
    require('../../assets/icons/top-right-black.png')
  ),
  new Arrow(
    Orientation.TopLeft,
    Color.Black,
    require('../../assets/icons/top-left-black.png')
  ),
  new Arrow(
    Orientation.BotRight,
    Color.Black,
    require('../../assets/icons/bot-right-black.png')
  ),
  new Arrow(
    Orientation.BotLeft,
    Color.Black,
    require('../../assets/icons/bot-left-black.png')
  ),
];

const WhiteArrows: Array<Arrow> = [
  new Arrow(
    Orientation.TopRight,
    Color.White,
    require('../../assets/icons/top-right-white.png')
  ),
  new Arrow(
    Orientation.TopLeft,
    Color.White,
    require('../../assets/icons/top-left-white.png')
  ),
  new Arrow(
    Orientation.BotRight,
    Color.White,
    require('../../assets/icons/bot-right-white.png')
  ),
  new Arrow(
    Orientation.BotLeft,
    Color.White,
    require('../../assets/icons/bot-left-white.png')
  ),
];

export { Orientation, Color, Arrow, BlackArrows, WhiteArrows };
