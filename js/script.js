// FAQ Toggle
// document.querySelectorAll('.bt-faq-item').forEach(item => {
//     const question = item.querySelector('.bt-faq-question');
//     question.addEventListener('click', () => {
//         item.classList.toggle('active');
//     });
// });

const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }
                                