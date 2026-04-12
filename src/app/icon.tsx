import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 256, height: 256 };
export const contentType = 'image/png';

export default function Icon() {
  const logoData = readFileSync(join(process.cwd(), 'public/aether-logo-new.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '256px',
          height: '256px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080808',
          borderRadius: '52px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={logoBase64}
          style={{
            position: 'absolute',
            width: '346px',
            height: '346px',
            top: '-45px',
            left: '-45px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    ),
    { width: 256, height: 256 },
  );
}
