// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.style.display = 'block';
        targetSection.style.animation = 'fadeIn 1s ease-in-out';
    });
});

document.querySelector('#home').style.display = 'block'; // Show home section by default

function calculateCalories() {
    const grams = document.getElementById('calories-input').value;
    const calories = grams * 4; // สมมติค่าแคลอรี่ต่อกรัม
    document.getElementById('calories-result').innerText = `แคลอรี่ทั้งหมด: ${calories} แคลอรี่`;
}

function calculateNutrients() {
    const protein = document.getElementById('protein-input').value;
    const carbs = document.getElementById('carbs-input').value;
    const fat = document.getElementById('fat-input').value;

    const caloriesFromProtein = protein * 4;
    const caloriesFromCarbs = carbs * 4;
    const caloriesFromFat = fat * 9;

    const totalCalories = caloriesFromProtein + caloriesFromCarbs + caloriesFromFat;

    document.getElementById('nutrients-result').innerText = `
        แคลอรี่จากโปรตีน: ${caloriesFromProtein} แคลอรี่
        แคลอรี่จากคาร์โบไฮเดรต: ${caloriesFromCarbs} แคลอรี่
        แคลอรี่จากไขมัน: ${caloriesFromFat} แคลอรี่
        แคลอรี่ทั้งหมด: ${totalCalories} แคลอรี่
    `;
}

function measureHeartRate() {
    const heartRate = document.getElementById('heart-rate-input').value;
    document.getElementById('heart-rate-result').innerText = `อัตราการเต้นของหัวใจ: ${heartRate} ครั้งต่อนาที`;
}

function trackExercise() {
    const exerciseTime = document.getElementById('exercise-time').value;
    document.getElementById('exercise-result').innerText = `ระยะเวลาในการออกกำลังกาย: ${exerciseTime} นาที`;
}

function countSteps() {
    const steps = document.getElementById('step-count').value;
    document.getElementById('step-result').innerText = `จำนวนก้าวเดินทั้งหมด: ${steps} ก้าว`;
}

function measureActivity() {
    const activityLevel = document.getElementById('activity-level').value;
    document.getElementById('activity-result').innerText = `ระดับความเคลื่อนไหว: ${activityLevel}`;
}

function recommendExercise() {
    const recommendations = [
        'วิดพื้น 10 ครั้ง',
        'กระโดดตบ 15 ครั้ง',
        'ซิทอัพ 20 ครั้ง',
        'วิ่งอยู่กับที่ 5 นาที'
    ];
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    document.getElementById('exercise-recommendation-result').innerText = `ท่าออกกำลังกายที่แนะนำ: ${recommendations[randomIndex]}`;
}

function subscribePremium() {
    document.getElementById('subscription-result').innerText = 'ขอบคุณที่สมัครสมาชิกพรีเมี่ยม!';
}

function redeemCoupon() {
    document.getElementById('coupon-result').innerText = 'คุณได้รับคูปองส่วนลดแล้ว! ใช้ได้ที่ฟิตเนสร้านที่ร่วมรายการ';
}
