'use strict';

import css from './header.scss';

class Header {

    toggleHelp() {
        const helpContent = document.getElementById('help-content').classList;
        const helpToggle = document.getElementById('help-toggle');

        if (helpContent.contains('hide')) {
            helpContent.remove('hide');
            document.getElementById('help-toggle').innerText = "Close";
        } else {
            helpContent.add('hide');
            document.getElementById('help-toggle').innerText = "Open";
        }
    }

    run() {

        document.getElementById('header').innerHTML = `
            <nav class="navbar wrapper">
                <div class="aside-1">
                    <div class="fleft logo"><span class="fa fa-bars"></span> Dummy App</div>
                    <div class="fright"><span class="fa fa-user"></span> John | Log out</div>
                </div>
            </nav>
            <div class="wrapper breadcrumb">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol>
                    <li class="breadcrumb-item"><a href="#"><span class="fa fa-home"></span></a></li>
                    <li class="breadcrumb-item"><a href="#">Page 1</a></li>
                    <li class="breadcrumb-item"><a href="#">Breadcrumbs</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Current page</li>
                    </ol>
                </nav>
            </div>

            <div class="iconguide">
                <div class="wrapper">
                    <ul>
                    <li><span class="fa fa-puzzle-piece"></span><span class="light">Sector<br><span class="strong">Sports</span></span></a></li>
                    <li><span class="fa fa-futbol-o"></span><span class="light">Sports Type<br><span class="strong">Bicycles</span></span></a></li>
                    <li><span class="fa fa-bicycle"></span><span class="light">Mode<br><span class="strong">Mountain Cross</span></span></a></li>
                    </ul>
                </div>
            </div>

            <div class="wrapper spacer-50">
                <div id="help-title" class="aside-1">Help <a href="#" id="help-toggle">Close</a></div>
                <div id="help-content" class="aside-1"><p><span class="fa fa-life-ring"></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            </div>
        `;

        //attach event listener for help toggle
        const form = document.querySelector('#help-toggle');
        form.addEventListener('click', (e) => {
            e.preventDefault()
            this.toggleHelp();
        });

    }
};

export default Header;