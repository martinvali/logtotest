const user_details = {
  page_title: '用戶詳情',
  back_to_users: '返回用戶管理',
  created_title: '用戶創建成功',
  created_guide: '這是用戶登錄過程中的信息。',
  created_email: '電子郵箱地址：',
  created_phone: '手機號碼：',
  created_username: '用戶名：',
  created_password: '密碼：',
  menu_delete: '刪除用戶',
  delete_description: '本操作將永久刪除該用戶，且無法撤銷。',
  deleted: '用戶已成功刪除。',
  reset_password: {
    reset_password: '重置密碼',
    title: '確定要重置密碼？',
    content: '本操作不可撤銷，將會重置用戶的登入資訊。',
    congratulations: '該用戶已被重置',
    new_password: '新密碼：',
  },
  tab_settings: '設定',
  tab_roles: '角色',
  tab_logs: '用戶日誌',
  /** UNTRANSLATED */
  tab_organizations: 'Organizations',
  /** UNTRANSLATED */
  authentication: 'Authentication',
  authentication_description:
    '每個用戶都有一個包含所有用戶資訊的個人資料。它由基本數據、社交身份和自定義數據組成。',
  /** UNTRANSLATED */
  user_profile: 'User profile',
  field_email: '電子郵箱',
  field_phone: '手機號碼',
  field_username: '用戶名',
  field_name: '姓名',
  field_avatar: '頭像圖片連結',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: '自定義數據',
  field_custom_data_tip: '預定義屬性之外的用戶資訊，例如用戶偏好的顏色和語言。',
  field_connectors: '社交帳號',
  /** UNTRANSLATED */
  field_sso_connectors: 'Enterprise connections',
  custom_data_invalid: '自定義數據必須是有效的 JSON 對象',
  connectors: {
    connectors: '連接器',
    user_id: '用戶ID',
    remove: '刪除',
    /** UNTRANSLATED */
    connected: 'This user is connected with multiple social connectors.',
    not_connected: '該用戶還沒有綁定社交帳號',
    deletion_confirmation: '您正在刪除現有的<name/>身份。你確定要繼續嗎？',
  },
  sso_connectors: {
    /** UNTRANSLATED */
    connectors: 'Connectors',
    /** UNTRANSLATED */
    enterprise_id: 'Enterprise ID',
    /** UNTRANSLATED */
    connected:
      'This user is connected to multiple enterprise identity providers for Single Sign-On.',
    /** UNTRANSLATED */
    not_connected:
      'The user is not connected to any enterprise identity providers for Single Sign-On.',
  },
  mfa: {
    field_name: '多因素驗證',
    field_description: '這個用戶已啟用2步驗證因素。',
    name_column: '多因素驗證',
    field_description_empty: '此使用者尚未啟用兩步驗證因素。',
    deletion_confirmation: '您正在刪除現有的雙步驗證中的 <name/>。你確定要繼續嗎？',
  },
  suspended: '已禁用',
  suspend_user: '禁用用戶',
  suspend_user_reminder:
    '你確定要禁用這個用戶嗎？用戶將無法登錄你的應用程式，並且在當前令牌過期後將無法獲取新的訪問令牌。此外，此用戶發出的任何 API 請求都將失敗。',
  suspend_action: '禁用',
  user_suspended: '用戶已被禁用。',
  reactivate_user: '啟用用戶',
  reactivate_user_reminder: '你確定要啟用這個用戶嗎？這將允許該用戶的任何登錄嘗試。',
  reactivate_action: '啟用',
  user_reactivated: '用戶已被啟用。',
  roles: {
    name_column: '角色名稱',
    description_column: '描述',
    assign_button: '分配角色',
    delete_description: '此操作將從此用戶中刪除此角色。角色本身仍將存在，但不再與此用戶相關聯。',
    deleted: '已成功將 {{name}} 從此用戶中刪除。',
    assign_title: '將角色分配給 {{name}}',
    assign_subtitle: '為 {{name}} 授權一個或多個角色',
    assign_role_field: '分配角色',
    role_search_placeholder: '按角色名稱搜索',
    added_text: '添加了 {{value, number}} 個',
    assigned_user_count: '{{value, number}} 個用戶',
    confirm_assign: '分配角色',
    role_assigned: '已成功分配角色',
    search: '按角色名稱、描述或 ID 搜索',
    empty: '無可用角色',
  },
  warning_no_sign_in_identifier:
    '使用者需要至少擁有一個登入標識（使用者名稱、電子郵件、電話號碼或社交帳號）才能登入。確定要繼續嗎？',
  /** UNTRANSLATED */
  organization_roles_tooltip: 'The roles assigned to the user within this organization.',
};

export default Object.freeze(user_details);
