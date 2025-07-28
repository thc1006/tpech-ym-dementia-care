/**
 * 幸福記憶小棧 官方網站 - 共用 JavaScript
 * -----------------------------------------
 * 這個檔案包含了網站所有的互動功能，
 * 包含：圖示初始化、手機版選單、回到頂端按鈕、手風琴式展開/收合效果。
 */

// 等待整個頁面內容都載入完成後，再執行我們的腳本，確保所有元素都已存在。
document.addEventListener('DOMContentLoaded', () => {
    
    // 初始化 Lucide 圖示
    // 檢查 lucide 物件是否存在，以避免在圖示庫載入前執行而產生錯誤。
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 手機版導覽列選單功能
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 「回到頂端」按鈕功能
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        // 監聽頁面滾動事件
        window.onscroll = function() {
            // 如果頁面往下滾動超過 200 像素，就顯示按鈕，否則隱藏。
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        };
        // 監聽按鈕點擊事件，點擊後平滑地滾動回頁面頂端。
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 手風琴式展開/收合效果 (Accordion) 功能
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('i[data-lucide="chevron-down"]');
                
                // 先關閉其他已展開的項目
                document.querySelectorAll('.accordion-item').forEach(item => {
                    if (item !== header.parentElement) {
                        const otherContent = item.querySelector('.accordion-content');
                        const otherIcon = item.querySelector('.accordion-header i[data-lucide="chevron-down"]');
                        if (otherContent) otherContent.style.maxHeight = null;
                        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                // 切換被點擊的項目
                if (content && content.style.maxHeight) {
                    content.style.maxHeight = null;
                    if (icon) icon.style.transform = 'rotate(0deg)';
                } else {
                    if (content) content.style.maxHeight = content.scrollHeight + "px";
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }
});
