'use strict';

import css from './footer.scss';

class Footer {

    run() {
        document.getElementById('footer').innerHTML = `
            <nav class="footer spacer-100">
                <div class="aside-1">
                    <div class="fleft">Dummy App</div>
                    <div class="fright">Version 1.14</div>
                </div>
            </nav>
        `;

    }
};

export default Footer;