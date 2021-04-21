export class Dashboard {
  userID = 'user';
  email = 'user@email.com';
  weight: string = undefined;
  height: string = undefined;
  age: string = undefined;
  range: string = undefined;
  bmi: string = undefined;
  target: string = undefined;
  static selectUserId: (item: Dashboard) => string = item => item.userID;
}

