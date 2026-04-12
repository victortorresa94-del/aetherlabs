import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  const logoData = readFileSync(join(process.cwd(), 'public/aether-logo-new.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080808',
          borderRadius: '40px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={logoBase64}
          style={{
            position: 'absolute',
            width: '244px',
            height: '244px',
            top: '-32px',
            left: '-32px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
