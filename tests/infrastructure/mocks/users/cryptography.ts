/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HashComparer } from '@application/interfaces/cryptography/HashCompare';
import { HashGenerator } from '@application/interfaces/cryptography/HashGenerator';
import { JWTGenerator } from '@application/interfaces/cryptography/JWTGenerator';
import { JWTVerifier } from '@application/interfaces/cryptography/JWTVerifier';

export class HashCompareStub implements HashComparer {
  async compare(_plaintext: string, _hash: string): Promise<boolean> {
    return true;
  }
}

export class HashGeneratorStub implements HashGenerator {
  async hash(_data: string): Promise<string> {
    return 'sample-hash';
  }
}

export class JWTGeneratorStub implements JWTGenerator {
  async generate(_payload: string): Promise<string> {
    return 'sample-jwt-token';
  }
}

export class JWTVerifierStub implements JWTVerifier {
  async verify(_jwt: string): Promise<string | null> {
    return 'sample-user';
  }
}
