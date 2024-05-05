import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Test env = ${process.env.TEST_ENV}`;
  }
}
