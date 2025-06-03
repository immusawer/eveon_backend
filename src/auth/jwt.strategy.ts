import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'e4b7a1a3d4f9c2fae91c4b4e15a3fc96d19f4a1e6c0d2b5d01cc4a12d4e6f8e1df59f3b09fa5cf9f1e6b7f8a63bd79c9', // Replace with your actual secret or use config
    });
  }

  async validate(payload: any) {
    // You can add more logic here, e.g., fetch user from DB
    return { userId: payload.sub, email: payload.email };
  }
}