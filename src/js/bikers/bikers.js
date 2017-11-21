'use strict';


class Bikers {
    constructor(config) {

        this.rideInGroup = [];
        this.dayOfWeek = [];
        this.bikerItems = [];
        this.biker = {};

    }

    fetchBikers() {

        fetch('http://localhost:3000/bikers')
            .then(response => response.json())
            .then(a => {
                this.bikerItems = a.bikerItems;
                this.dayOfWeek = a.dayOfWeek;
                this.rideInGroup = a.rideInGroup;
                this.run();
            });

    }

    getCheckedData(a) {
        let output = [];
        for (var i = 0; i < a.length; i++) {
            output.push(a[i].value);
        }
        return output.join(', ');
    }

    removeBiker(a) {
        for (let i = 0; i < this.bikerItems.length; i++) {
            if (this.bikerItems[i].id == a) {
                this.bikerItems.splice(i, 1);
                break;
            }
        }
        this.run();
    }

    submitForm() {
        let id = this.bikerItems.sort(function(a, b) {
            return a.id - b.id || a.name.localeCompare(b.name);
        });

        let lastId = id[id.length - 1];

        this.biker = {
            id: lastId.id + 1,
            fullName: document.querySelector('#full-name').value || '',
            email: document.querySelector('#email').value || '',
            city: document.querySelector('#city').value || '',
            rideInGroup: document.querySelector('#ride-in-group:checked') ? document.querySelector('#ride-in-group:checked').value : '',
            dayOfWeek: document.querySelector('#day-of-week:checked') ? this.getCheckedData(document.querySelectorAll('#day-of-week:checked')) : '',
            registrationDay: new Date().getTime()
        };

        this.bikerItems.push(this.biker);

        this.biker = {};
        // document.getElementById('form-bikers').reset();
        this.run();
    }

    run() {

            document.getElementById('content').innerHTML = `
            <form id="form-bikers" class="spacer-100">

                <div class="wrapper">
                    <h1>User Registration</h1>
                
                    <div class="aside aside-1">
                        <div class="form-group">
                            <label>Full name</label>
                            <input class="text-input" id="full-name" required>
                            <span class="instructions">Instruction to show on input focus</span>
                        </div>
                        <div class="form-group">
                        <label>E-mail</label>
                            <input class="text-input" id="email" required>
                        </div>
                        <div class="form-group">
                            <label>City</label>
                            <input class="text-input" id="city" required>
                        </div> 
                    </div>

                    <div class="aside aside-2">
                        <div>
                            <div class="form-group">
                                <label>Ride in Group?</label>
                                ${this.rideInGroup.map((a, i) => `
                                <label class="radio-inline">
                                    <input type="radio" class="radio radio-custom" name="ride-in-group" id="ride-in-group" value="${a}" ${ i == 0 ? 'checked': ''}>
                                    <span class="radio-custom-label">${a}</span>
                                </label>
                            `).join('')}
                            </div>  
                        </div>  

                        <div>
                            <div class="form-group spacer-35">
                                <label>Day of the week</label>
                                ${this.dayOfWeek.map((a, i) => `
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="checkbox checkbox-custom" id="day-of-week" value="${a}" ${ i == 0 ? 'checked': ''}>
                                    <span class="checkbox-custom-label">${a}</span>
                                </label>
                            `).join('')}
                            </div>  
                        </div> 
                        <div>
                            <div class="form-group spacer-35 text-right">
                            <button type="button" class="btn" id="cancel">Cancel</button> <button type="button" class="btn btn-primary" id="submit">Save</button>
                            </div>
                        </div> 
                    </div>
                </div>   
                
            </form>

            <div class="wrapper spacer-100">
                <h1>Bikers</h1>
                <div class="table">
                <div class="row header">
                    <div class="cell cell-1">Full name</div>
                    <div class="cell cell-1">E-mail</div>
                    <div class="cell cell-2">City</div>
                    <div class="cell cell-1">Ride in group</div>
                    <div class="cell cell-1">Day of the week</div>
                    <div class="cell cell-1">Registration day</div>
                    <div class="cell cell-2"></div>
                </div>
                ${this.bikerItems.map(a => `
                    <div class="row" id="biker-${a.id}">
                        <div class="cell cell-1">${a.fullName}</div>
                        <div class="cell cell-1">${a.email}</div>
                        <div class="cell cell-2">${a.city}</div>
                        <div class="cell cell-1">${a.rideInGroup}</div>
                        <div class="cell cell-1">${a.dayOfWeek}</div>
                        <div class="cell cell-1">${("0" + new Date(a.registrationDay).getDate()).slice(-2) + '/' + ("0" + (new Date(a.registrationDay).getMonth() + 1)).slice(-2) + '/' +  new Date(a.registrationDay).getFullYear()}</div>
                        <div class="cell cell-2"><span class="delete fa fa-trash-o"></span></div>
                    </div>
                `).join('')}
                </div>
            </div>
            <div class="spacer-100">&nbsp;</div>
        `;

        //attach event listener for form submit
        const form = document.querySelector('#submit');
        form.addEventListener('click', ()=> {
            this.submitForm();
        });

        this.bikerItems.map((a) => {
            const row = document.querySelector('#biker-'+ a.id);
            row.addEventListener('click', ()=> {
                this.removeBiker(a.id);
            });
    
        })

    }
};

export default Bikers;