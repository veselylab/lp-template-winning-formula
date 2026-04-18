// Auto-calibrate: listen for postMessage from PMG iframe
            window.addEventListener('message', function(e) {
              if (!e.origin.includes('vesely.ai') && !e.origin.includes('paymegpt.com')) return;
              var d = e.data;
              // PMG may send {type:'resize', height:N} or {height:N}
              var h = (d && (d.height || (d.data && d.data.height)));
              if (h && h > 100) {
                // Total iframe content height known — set wrapper to show just fields
                var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pmg-h'));
                document.getElementById('form-clip').style.height = (h - headerH) + 'px';
                document.getElementById('pmg-form-iframe').style.height = h + 'px';
              }
            });