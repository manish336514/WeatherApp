export class CurrentWeather {
  constructor(
    public cityName: string,
    public temerature: string,
    public icon: string,
    public weatherkind: string,
    public tempMax: string,
    public temMin: string
  ) {}
}
