import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './index.css';

function Footer() {
  return (
    <footer>
      <Typography
        color="text.secondary"
        variant="caption"
      >
        Desenvolvido por <Link underline="none" href="https://github.com/Vulcis-Jonas">Jonas Teixeira</Link> para o processo seletivo da <Link underline="none" href="https://topos.inf.br/">Topos</Link>.
      </Typography>
    </footer>
  );

  
}

export default Footer;
