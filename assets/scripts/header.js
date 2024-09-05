"use strict";
class Header {
    constructor() {
        this.linksUrl = [
            { linkName: 'Главная', url: '/yargogdpsofficial' },
            { linkName: 'Новости', url: './news.html' },
            { linkName: 'Демонлист', url: './dl.html' },
        ];
        const header = document.getElementById('header');
        const hcontainer = document.createElement('div');
        hcontainer.className = 'container-900px';
        header.appendChild(hcontainer);
        const hbody = document.createElement('div');
        hbody.className = 'header-body';
        hcontainer.appendChild(hbody);
        const hlogo = document.createElement('div');
        hlogo.className = 'header-logo';
        hbody.appendChild(hlogo);
        const hlogoLink = document.createElement('a');
        hlogoLink.href = '/yargogdpsofficial';
        hlogo.appendChild(hlogoLink);
        const hlogoImg = document.createElement('img');
        hlogoImg.src = './assets/img/logo/main.png';
        hlogoImg.alt = '';
        hlogoLink.appendChild(hlogoImg);
        const hlogoP = document.createElement('h4');
        hlogoP.textContent = 'YarGoGDPS';
        hlogoLink.appendChild(hlogoP);
        const hnav = document.createElement('div');
        hnav.className = 'header-nav';
        hnav.id = 'menu';
        hbody.appendChild(hnav);
        const hnavtrue = document.createElement('nav');
        hnav.appendChild(hnavtrue);
        this.hnavlist = document.createElement('ul');
        this.hnavlist.className = 'header-list';
        hnavtrue.appendChild(this.hnavlist);
        for (let i = 0; i < this.linksUrl.length; i++)
            this.addHeaderLink(this.linksUrl[i].url, this.linksUrl[i].linkName);
        const hlogin = document.createElement('li');
        hlogin.className = 'header-log';
        hlogin.id = 'auth-link';
        this.hnavlist.appendChild(hlogin);
        const dwnl = document.createElement('p');
        dwnl.id = 'auth-p';
        dwnl.textContent = 'Скачать';
        dwnl.addEventListener('click', () => location.href = 'https://gofruit.space/gdps/053m');
        hlogin.appendChild(dwnl);
        const hhamburger = document.createElement('div');
        hhamburger.className = 'hamburger';
        hhamburger.id = 'hamburger';
        hbody.appendChild(hhamburger);
        const hhamburgerSpan = document.createElement('span');
        hhamburger.appendChild(hhamburgerSpan);
    }
    addHeaderLink(href, str) {
        const li = document.createElement('li');
        this.hnavlist.appendChild(li);
        const a = document.createElement('a');
        a.textContent = str;
        a.href = href;
        li.appendChild(a);
        const hr = document.createElement('hr');
        li.appendChild(hr);
    }
}
const header = new Header();
