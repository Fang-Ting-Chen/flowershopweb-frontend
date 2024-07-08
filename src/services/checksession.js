import { apichecksession } from '../api/api.js'


// 檢查會話狀態
export async function checkSessionStatus(router) {
  try {
    const response = await apichecksession();
    if (response.status == 404) {
      handleLogout(router); // 如果返回狀態不為 200，則登出     
    }
  } catch (error) {
    console.error('Error while checking session status:', error);
    handleLogout(router); 
  }
}

// 處理登出操作
function handleLogout(router) {
  
  localStorage.removeItem('user-info');
 
  router.push({ name: 'loginview' });
}
  