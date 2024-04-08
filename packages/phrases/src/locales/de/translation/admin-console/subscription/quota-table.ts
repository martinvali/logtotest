const quota_table = {
  quota: {
    title: 'Grundlagen',
    base_price: 'Grundpreis',
    mau_limit: 'MAU-Limit',
    included_tokens: 'Inkludierte Tokens',
  },
  application: {
    title: 'Anwendungen',
    total: 'Gesamtzahl der Anwendungen',
    m2m: 'Maschine-zu-Maschine',
    /** UNTRANSLATED */
    third_party: 'Third-party apps',
  },
  resource: {
    title: 'API-Ressourcen',
    resource_count: 'Ressourcenanzahl',
    scopes_per_resource: 'Berechtigungen pro Ressource',
  },
  branding: {
    title: 'Benutzeroberfläche und Branding',
    custom_domain: 'Benutzerdefinierte Domain',
    custom_css: 'Benutzerdefiniertes CSS',
    app_logo_and_favicon: 'App-Logo und Favicon',
    dark_mode: 'Dunkler Modus',
    i18n: 'Internationalisierung',
  },
  user_authn: {
    title: 'Benutzerauthentifizierung',
    omni_sign_in: 'Omni-Anmeldung',
    password: 'Passwort',
    passwordless: 'Passwortlos - E-Mail und SMS',
    email_connector: 'E-Mail-Connector',
    sms_connector: 'SMS-Connector',
    social_connectors: 'Social-Connectors',
    standard_connectors: 'Standard-Connectors',
    built_in_email_connector: 'Integrierter E-Mail-Connector',
    mfa: 'Multi-Faktor-Authentifizierung',
    sso: 'Unternehmens-SSO',
    adaptive_mfa: 'Adaptive MFA',
  },
  user_management: {
    title: 'Benutzerverwaltung',
    user_management: 'Benutzerverwaltung',
    roles: 'Rollen',
    machine_to_machine_roles: 'Maschine-zu-Maschine Rollen',
    scopes_per_role: 'Berechtigungen pro Rolle',
  },
  organizations: {
    title: 'Organisation',
    organizations: 'Organisationen',
    monthly_active_organization: 'Monatlich aktive Organisationen',
    allowed_users_per_org: 'Erlaubte Benutzer pro Organisation',
    invitation: 'Einladung',
    org_roles: 'Org Rollen',
    org_permissions: 'Org Berechtigungen',
    just_in_time_provisioning: 'Bedarfsgesteuerte Bereitstellung',
  },
  support: {
    title: 'Compliance und Support',
    community: 'Gemeinschaft',
    customer_ticket: 'Support-Ticket',
    premium: 'Premium',
    email_ticket_support: 'E-Mail-Ticket-Support',
    soc2_report: 'SOC2-Bericht',
    hipaa_or_baa_report: 'HIPAA/BAA-Bericht',
  },
  developers_and_platform: {
    /** UNTRANSLATED */
    title: 'Developers and platform',
    /** UNTRANSLATED */
    hooks: 'Webhooks',
    /** UNTRANSLATED */
    audit_logs_retention: 'Audit logs retention',
    /** UNTRANSLATED */
    jwt_claims: 'JWT claims',
    /** UNTRANSLATED */
    tenant_members: 'Tenant members',
  },
  unlimited: 'Unbegrenzt',
  contact: 'Kontakt',
  monthly_price: '${{value, number}}/Monat',
  days_one: '{{count, number}} Tag',
  days_other: '{{count, number}} Tage',
  add_on: 'Zusatzleistung',
  tier: 'Stufe{{value, number}}: ',
  paid_token_limit_tip:
    'Logto wird Gebühren für Funktionen erheben, die über Ihr Kontingent hinausgehen. Sie können es kostenlos nutzen, bis wir ab dem 2. Quartal 2024 mit der Abrechnung beginnen. Wenn Sie mehr Tokens benötigen, setzen Sie sich bitte mit uns in Verbindung. Standardmäßig berechnen wir $80 pro Monat für jede Million Tokens.',
  paid_quota_limit_tip:
    'Logto wird Gebühren für Funktionen hinzufügen, die über Ihr Kontingent hinausgehen. Sie können es kostenlos verwenden, bis wir etwa im 2. Quartal 2024 mit der Berechnung beginnen.',
  paid_add_on_feature_tip:
    'Dies ist eine Zusatzfunktion. Sie können sie kostenlos verwenden, bis wir etwa im 2. Quartal 2024 mit der Berechnung beginnen.',
  million: '{{value, number}} Millionen',
  mau_tip:
    'MAU (monatlich aktive Benutzer) bezeichnet die Anzahl der eindeutigen Benutzer, die in einem Abrechnungszyklus mindestens einen Token mit Logto ausgetauscht haben.',
  tokens_tip:
    'Alle Arten von Tokens, die von Logto ausgegeben wurden, einschließlich Zugriffstoken, Aktualisierungstoken, usw.',
  mao_tip:
    'MAO (Monthly Active Org) bezeichnet die Anzahl der einzigartigen Organisationen, die in einem Abrechnungszyklus mindestens einen MAU (Monthly Active User) haben.',
  /** UNTRANSLATED */
  third_party_tip:
    'Use Logto as your OIDC identity provider for third-party app sign-ins and permission grants.',
  included: '{{value, number}} inklusive',
  included_mao: '{{value, number}} MAO enthalten',
  extra_quota_price: 'Dann ${{value, number}} pro Monat / je danach',
  per_month_each: '${{value, number}} pro Monat / je',
  extra_mao_price: 'Dann ${{value, number}} pro MAO',
  per_month: '${{value, number}} pro Monat',
  /** UNTRANSLATED */
  per_member: 'Then ${{value, number}} per member',
};

export default Object.freeze(quota_table);
