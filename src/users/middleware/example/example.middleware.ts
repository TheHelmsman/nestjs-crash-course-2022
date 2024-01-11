import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Example middleware');
    console.log(req.headers);

    const { authorisation } = req.headers;
    console.log('authorisation:', authorisation);
    console.log('authorisation === Panda', authorisation === 'Panda');
    if (!authorisation)
      throw new HttpException('No authorisation token', HttpStatus.FORBIDDEN);
    if (authorisation === 'Panda') next();
    else
      throw new HttpException(
        'Invalid authorisation token',
        HttpStatus.FORBIDDEN,
      );
  }
}
