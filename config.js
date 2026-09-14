/* ===================================================================
   字音字形練習　雲端設定
   ‧ 這個檔案要和 index.html 放在同一層目錄
   ‧ 更新 index.html 時「不要」動這個檔案，設定就不會消失
   ‧ 三個值都留空也能執行，只是成績僅存在該台裝置

   supabaseUrl  Supabase → Settings → API 的 Project URL
                長得像 https://xxxxxxxxxxxx.supabase.co

   supabaseKey  兩種都可以，程式會自動判斷該用哪種送出方式：
                ① Publishable key（推薦，新制）
                   Settings → API Keys 這一頁，格式 sb_publishable_...
                ② anon public key（舊制，將於 2026 年底停用）
                   Settings → API Keys → Legacy 那一頁，格式 eyJ...
                絕對不要貼 Secret key（sb_secret_...）或 service_role，
                那兩個會繞過所有權限控管，而這個檔案是公開的。

   teacherCode  進入「教師檢視」與「匯入題庫」用的代碼，自己取一組
   =================================================================== */
window.ZYZX_CONFIG_LOADED = true;   // 供程式判斷這個檔案有沒有被讀到，請勿刪除

window.ZYZX_CONFIG = {
  supabaseUrl: "https://bzdykriyrisfguaqhkjd.supabase.co",
  supabaseKey: "sb_publishable_28C5MzDv479XfhT4ip7_1w_UaYqd89o",
  teacherCode: "Sunrise123"
};
