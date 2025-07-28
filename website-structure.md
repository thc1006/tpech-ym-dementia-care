### **專案結構圖**

```bash
/tpech-ym-care/      \<-- Repo 根目錄 (名稱可自訂)  
|  
├── .gitignore                    \<-- (建議) 忽略不必要的檔案  
├── README.md                     \<-- (必要) 專案說明文件  
├── index.html                    \<-- 網站「主頁面」  
|  
└─── pages/                       \<-- 所有「子頁面」都放在這裡  
|    |  
|    ├── guide/                   \<-- 「初確診指南」專區  
|    |   ├── index.html           \<-- 指南的首頁 (我們下一個要建立的頁面)  
|    |   ├── 1-understanding-diagnosis.html  
|    |   ├── 2-treatments.html  
|    |   ├── 3-legal-planning.html  
|    |   └── 4-finding-support.html  
|    |  
|    ├── knowledge-base/          \<-- 「進階照護知識庫」專區  
|    |   ├── index.html           \<-- 知識庫的首頁  
|    |   ├── 1-bpsd.html  
|    |   ├── 2-meaningful-activities.html  
|    |   ├── 3-friendly-home.html  
|    |   ├── 4-medication.html  
|    |   └── 5-palliative-care.html  
|    |  
|    ├── services.html            \<-- 據點服務頁面  
|    └── join.html                \<-- 如何加入頁面  
|  
└─── assets/                      \<-- 所有「靜態資源」 (圖片、樣式、腳本)  
     |  
     ├── css/  
     |   └── style.css            \<-- (備用) 未來的共用樣式表  
     ├── js/  
     |   └── main.js              \<-- (備用) 未來的共用腳本  
     └── images/  
         ├── hero-image.jpg  
         ├── MDDordemia.png  
         └── ... (您所有的圖片)

```

### **各部分說明**

* **index.html (根目錄):**  
  * 您網站的**門戶**，也就是我們已經建立好的那個首頁。  
* **/pages/ 資料夾:**  
  * **核心概念：** 這是您網站所有**內容頁面**的家。  
  * **/guide/ 子資料夾：** 專門存放「初確診指南」的所有相關頁面。我們將為這個專區建立一個 index.html 作為入口頁。  
  * **/knowledge-base/ 子資料夾：** 同理，用來存放「進階照護知識庫」的所有頁面。  
  * **services.html & join.html:** 未來您可以將「據點服務」和「如何加入」的內容也製作成獨立頁面放在這裡，讓網站結構更清晰。  
* **/assets/ 資料夾:**  
  * **核心概念：** 存放所有**非 HTML** 的輔助檔案。  
  * **/images/:** 存放您網站會用到的所有圖片。  
  * **/css/ & /js/:** 預留的資料夾。當網站變得更複雜時，將共用的 CSS 樣式和 JavaScript 功能抽離出來，會是更好的做法。
