let cookieHtml = `<div class="fn-cookie show">
                    <div class="container">
                        <div class="pt16 pb16">
                            <p class="sarabun-m-reg">เราขอเก็บข้อมลคุกกี้จากคณหน่อยนะครับ เพื่อนำมาพัฒนาและเสนอข้อมูลดีๆ ให้คุณได้ใช้เว็บไซต์ด้วยประสบการณ์ที่ดี โดยการเยี่ยมชมเว็บไซด์ของเราถือเป็นการยินยอมให้เราจัดเก็บคุกกี้ตาม<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#cookieModal">นโยบายการใช้คุกกี้</a></p>

                            <div class="d-flex justify-content-end">
                                <button class="fn-button fn-btn-S fn-btn-secondary mr16" data-bs-toggle="modal" data-bs-target="#settingCookieModal">ตั้งค่าคุกกี้</button>
                                <button class="fn-button fn-btn-S fn-btn-primary" id="allCookieBtn">ยอมรับคุกกี้ทั้งหมด</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="cookieModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-body pt-0">
                                <div class="fn-modal-title mb16">นโยบายการใช้คุกกี้<br>บริษัท เงินติดล้อ จำกัด (มหาชน)</div>
                                <div class="fn-modal-body text-start">
                                    <p>บริษัท เงินติดล้อ จำกัด (มหาชน) (ใช้คำเรียกแทนว่า "เงินติดล้อ", "เรา", "ของเรา" ตระหนักถึงความโปร่งใสในการจัดการข้อมูล และความเป็นส่วนตัวบนข้อมูลส่วนบุคคลของคุณที่ได้เข้าใช้งานเว็บไซต์นี้ เพื่อให้ได้คุณได้รับความคุ้มครองอย่างเหมาะสม เงินติดล้อจึงขอประกาศการใข้นโยบายการใช้คุกกี้สำหรับเว็บไซต์นี้</p>
                                    <ol>
                                        <li class="fw-bold">
                                            คุกกี้คืออะไร
                                            <p class="fw-normal">คุกกี้ (Cookie) คือ ไฟล์เล็กๆเพื่อจัดเก็บข้อมูลโดยจะบันทึกลงไปในอุปกรณ์คอมพิวเตอร์ และ/หรือเครื่องมือสื่อสารที่เข้าใช้งานของคุณ เช่น แท็บเล็ต, สมาร์ทโฟน ผ่านทางเว็บเบราว์เซอร์ในขณะที่คุณเข้าสู่เว็บไซต์ เพื่อช่วยให้คุณสามารถเข้าใข้งานเว็บไซต์ได้อย่างต่อเนื่อง โดยคุกกี้จะไม่ก่อให้เก็ดอันตรายต่ออุปกรณ์คอมพิวเตอร์และ/หรือเครื่องมือสื่อสารของคุณ</p>
                                        </li>
                                        <li class="fw-bold">
                                            เงินติดล้อ มีวัตถุประสงค์ในการใช้คุกกี้ 4 ประเภทดังนี้
                                            <p class="fw-normal">คุกกี้ (Cookie) คือ ไฟล์เล็กๆเพื่อจัดเก็บข้อมูลโดยจะบันทึกลงไปในอุปกรณ์คอมพิวเตอร์ และ/หรือเครื่องมือสื่อสารที่เข้าใช้งานของคุณ เช่น แท็บเล็ต, สมาร์ทโฟน ผ่านทางเว็บเบราว์เซอร์ในขณะที่คุณเข้าสู่เว็บไซต์ เพื่อช่วยให้คุณสามารถเข้าใข้งานเว็บไซต์ได้อย่างต่อเนื่อง โดยคุกกี้จะไม่ก่อให้เก็ดอันตรายต่ออุปกรณ์คอมพิวเตอร์และ/หรือเครื่องมือสื่อสารของคุณ</p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="fn-button fn-btn-M fn-btn-primary" data-bs-dismiss="modal">ตกลง</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="settingCookieModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-body pt-0">
                                <div class="fn-modal-title mb16">ศูนย์การตั้งค่าความเป็นส่วนตัว</div>
                                <div class="fn-modal-body text-start">
                                    <p>เราขอเก็บข้อมูลคุกกี้จากคุณหน่อยนะครับ เพราะเราจะนำมาพัฒนาและเสนอข้อมูลดีๆ เพื่อคุณจะได้ใช้เว็บไซต์ด้วยประสบการณ์ที่น่าประกับใจ ซึ่งเราให้ความสำคัญกับความเป็นส่วนตัวของคุณมากๆ เมื่อกดยอมรับแล้ว สามารถเปลี่ยนใจได้ตลอดเวลาเลยครับ ถ้าอยากอ่านเพิ่มเติม ก็สามารถเข้าไปอ่านได้ที่<a href="javascript:;">ข้อมูลเพิ่มเติม</a></p>
                                    
                                    <form id="settingCookieForm">
                                        <table class="table">
                                            <tr>
                                                <td>คุกกี้ที่มีความจำเป็น</td>
                                                <td class="text-end text-muted">เปิดใช้งานตลอดเวลา</td>
                                            </tr>
                                            <tr>
                                                <td>คุกกี้ประสิทธิภาพ</td>
                                                <td class="text-end">
                                                    <div class="form-check form-switch d-inline-flex ms-auto">
                                                        <input class="form-check-input" type="checkbox" id="cookieCheck1" checked>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>คุกกี้ที่ช่วยเหลือในการทำงาน</td>
                                                <td class="text-end">
                                                    <div class="form-check form-switch d-inline-flex ms-auto">
                                                        <input class="form-check-input" type="checkbox" id="cookieCheck2" checked>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>คุกกี้กำหนดเป้าหมาย</td>
                                                <td class="text-end">
                                                    <div class="form-check form-switch d-inline-flex ms-auto">
                                                        <input class="form-check-input" type="checkbox" id="cookieCheck3" checked>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="fn-button fn-btn-S fn-btn-secondary mr16" data-bs-dismiss="modal">ยกเลิก</button>
                                <button type="button" class="fn-button fn-btn-S fn-btn-primary" id="setCookieBtn" data-bs-dismiss="modal">ยืนยันตัวเลือกของฉัน</button>
                            </div>
                        </div>
                    </div>
                </div>`;

$(document).on("click", "#setCookieBtn", function() {
    let check1 = '', check2 = '', check3 = '';
    if ($('#cookieCheck1').is(":checked")) {
        check1 = '/2';
    }
    if ($('#cookieCheck2').is(":checked")) {
        check2 = '/3';
    }
    if ($('#cookieCheck3').is(":checked")) {
        check3 = '/4';
    }

    let cookieVal = `tidlor_cookie=1${check1}${check2}${check3}`;
    setCookie(cookieVal);
    $('.fn-cookie').removeClass('show');
});
    

function setCookie(cookieVal) {
    document.cookie = cookieVal;
}

function getCookie(cookieVal) {
    let name = cookieVal + "=";
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let tl_cookie = getCookie("tidlor_cookie");
    if (tl_cookie == "") {
        $('body').append(cookieHtml);
        $('#allCookieBtn').on('click', function () {
            setCookie('tidlor_cookie=1/2/3/4');
            $('.fn-cookie').removeClass('show');
        });
    }
}

checkCookie();

let tidlor_cookie = getCookie("tidlor_cookie");
let cookieArr = tidlor_cookie.split('/');
console.log(cookieArr);