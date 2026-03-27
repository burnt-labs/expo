import { NativeModule } from 'expo-modules-core/types';

/**
 * @hidden
 */
export interface ExpoAppIntegrityModule extends NativeModule {
  // iOS
  isSupported: boolean;
  generateKeyAsync(): Promise<string>;
  attestKeyAsync(keyId: string, challenge: string): Promise<string>;
  generateAssertionAsync(keyId: string, challenge: string): Promise<string>;
  // Android - Play Integrity (Standard API)
  prepareIntegrityTokenProviderAsync(cloudProjectNumber: string): Promise<void>;
  requestIntegrityCheckAsync(requestHash: string): Promise<string>;
  // Android - Play Integrity (Classic API)
  requestIntegrityTokenAsync(nonce: string): Promise<string>;
  // Android - Hardware Attestation
  isHardwareAttestationSupportedAsync(): Promise<boolean>;
  generateHardwareAttestedKeyAsync(keyAlias: string, challenge: string): Promise<void>;
  getAttestationCertificateChainAsync(keyAlias: string): Promise<string[]>;
}
