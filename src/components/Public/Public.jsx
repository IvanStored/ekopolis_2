import { Box } from '@mui/material';

import BackImg2 from '../../assets/khersoncleanup.jpg';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Public() {
  const widgetScript = `
    var _zk_uaprom = _zk_uaprom || [];
    _zk_uaprom.push(
      ['APP_ID', '8952c467-d0ed-4a27-ae9f-e7db42c725b9'],
      ['CONTAINER_ID', 'prom_state_purchase'],
      ['LOCALE', 'uk'],
      ['ENTITYTYPE', 0],
      ['SRN', ['43561558']],
    );
    (function(d, tag, id) {
      if (d.getElementById(id)) return;
      var pjs = d.createElement(tag);
      pjs.id = id;
      pjs.type = 'text/javascript';
      pjs.src = '//zk-cabinet.c.evo.dev/js/build/zakupki_widget_init_v2/zakupki_widget_init_v2_wp.1ac95.js';
      pjs.async = true;
      var sc = d.getElementsByTagName(tag)[0];
      sc.parentNode.insertBefore(pjs, sc);
    })(document, 'script', 'zakupki_uaprom_id');
  `;
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // height: 'calc(100vh - 152px)',
        // animation: 'change 10s infinite ease-in-out',
      }}
    >
      <Helmet>
        <script type="text/javascript">{widgetScript}</script>
      </Helmet>

      <div
        id="prom_state_purchase"
        style={{
          margin: 'auto',
          padding: '30px',
          height: 'calc(100vh - 10px)',
        }}
      ></div>
    </Box>
  );
}
