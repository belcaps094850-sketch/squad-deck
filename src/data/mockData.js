// ── PI / ART ──────────────────────────────────────────────────────────────────
export const pi = {
  name: 'PI 2026.2',
  totalSprints: 6,
  currentSprint: 4,
  completionPct: 68,
  startDate: '2026-03-02',
  endDate: '2026-06-06',
  piPlanningDate: '2026-06-10',
  systemDemoDate: '2026-05-29',
  inspectAdaptDate: '2026-06-07',
};

// ── Teams ─────────────────────────────────────────────────────────────────────
export const teams = [
  { id: 't1', name: 'Phoenix',  velocity: 52, planned: 56, risk: 'low',    health: 85 },
  { id: 't2', name: 'Falcon',   velocity: 38, planned: 55, risk: 'high',   health: 58 },
  { id: 't3', name: 'Titan',    velocity: 48, planned: 50, risk: 'medium', health: 72 },
  { id: 't4', name: 'Horizon',  velocity: 61, planned: 60, risk: 'low',    health: 91 },
];

// ── Epics ─────────────────────────────────────────────────────────────────────
export const epics = [
  { id: 'e1', name: 'Customer Portal Modernization', status: 'in-progress', progress: 72, owner: 'Phoenix',  stories: 34, done: 25 },
  { id: 'e2', name: 'Auth Platform Upgrade (ForgeRock)', status: 'at-risk',    progress: 44, owner: 'Titan',    stories: 28, done: 12 },
  { id: 'e3', name: 'Self-Service Onboarding Flow',  status: 'in-progress', progress: 61, owner: 'Falcon',   stories: 22, done: 13 },
  { id: 'e4', name: 'Analytics & Reporting Dashboard', status: 'done',        progress: 100, owner: 'Horizon', stories: 18, done: 18 },
  { id: 'e5', name: 'API Gateway Consolidation',    status: 'blocked',     progress: 28, owner: 'Titan',    stories: 40, done: 11 },
];

// ── Active Sprint (Sprint 42, team Phoenix) ───────────────────────────────────
export const sprint = {
  name: 'Sprint 42',
  team: 'Phoenix',
  startDate: '2026-04-21',
  endDate: '2026-05-02',
  totalPoints: 56,
  donePoints: 32,
  inProgressPoints: 14,
  todoPoints: 10,
  get donePct() { return Math.round((this.donePoints / this.totalPoints) * 100); },
  get inProgressPct() { return Math.round((this.inProgressPoints / this.totalPoints) * 100); },
  get todoPct() { return Math.round((this.todoPoints / this.totalPoints) * 100); },
  burndown: [
    { day: 'Day 1', remaining: 56 },
    { day: 'Day 2', remaining: 50 },
    { day: 'Day 3', remaining: 44 },
    { day: 'Day 4', remaining: 40 },
    { day: 'Day 5', remaining: 36 },
    { day: 'Day 6', remaining: 34 },
    { day: 'Day 7', remaining: 30 },
    { day: 'Day 8', remaining: 24 },
    // Days 9-10 upcoming
  ],
};

// ── Backlog Items ─────────────────────────────────────────────────────────────
export const backlogItems = [
  { id: 'US-1041', title: 'SSO login via ForgeRock for mobile app', priority: 'high',   points: 8,  status: 'ready',       epic: 'e2' },
  { id: 'US-1042', title: 'Password reset self-service flow',       priority: 'high',   points: 5,  status: 'needs-ac',    epic: 'e3' },
  { id: 'US-1043', title: 'Customer profile edit page v2',          priority: 'medium', points: 3,  status: 'ready',       epic: 'e1' },
  { id: 'US-1044', title: 'API rate limiting per tenant',           priority: 'high',   points: 13, status: 'needs-ac',    epic: 'e5' },
  { id: 'US-1045', title: 'Session timeout warning modal',          priority: 'low',    points: 2,  status: 'ready',       epic: 'e2' },
  { id: 'US-1046', title: 'Onboarding step 3 — document upload',   priority: 'medium', points: 8,  status: 'in-refinement', epic: 'e3' },
  { id: 'US-1047', title: 'Dashboard export to PDF',               priority: 'low',    points: 5,  status: 'needs-ac',    epic: 'e4' },
  { id: 'US-1048', title: 'RBAC role assignment UI',               priority: 'high',   points: 8,  status: 'ready',       epic: 'e5' },
];

// ── Team Members (Phoenix) ────────────────────────────────────────────────────
export const teamMembers = [
  { id: 'm1', name: 'Ana Costa',     role: 'Dev',     happiness: 4, capacity: 90 },
  { id: 'm2', name: 'Brian Lopes',   role: 'Dev',     happiness: 3, capacity: 80 },
  { id: 'm3', name: 'Carla Mendes',  role: 'Dev',     happiness: 5, capacity: 100 },
  { id: 'm4', name: 'Diego Ramos',   role: 'QA',      happiness: 2, capacity: 75 },
  { id: 'm5', name: 'Elena Sousa',   role: 'Dev',     happiness: 4, capacity: 95 },
  { id: 'm6', name: 'Felipe Gomes',  role: 'UX',      happiness: 4, capacity: 85 },
];

// ── Impediments ───────────────────────────────────────────────────────────────
export const impediments = [
  { id: 'IMP-01', title: 'ForgeRock staging env unavailable',       team: 'Titan',   age: 7, owner: 'Bel C.',     status: 'open',     severity: 'high' },
  { id: 'IMP-02', title: 'Missing AWS Bedrock quota increase',      team: 'Phoenix', age: 3, owner: 'Ana C.',     status: 'open',     severity: 'medium' },
  { id: 'IMP-03', title: 'Dynatrace license expired in staging',    team: 'Falcon',  age: 5, owner: 'RTE',        status: 'open',     severity: 'high' },
  { id: 'IMP-04', title: 'DB migration script failing on UAT',      team: 'Phoenix', age: 2, owner: 'Diego R.',   status: 'in-progress', severity: 'medium' },
  { id: 'IMP-05', title: 'Security review blocked — no reviewer',   team: 'Titan',   age: 9, owner: 'Carla M.',  status: 'open',     severity: 'high' },
];

// ── Ceremonies ────────────────────────────────────────────────────────────────
export const ceremonies = [
  { id: 'c1', name: 'Daily Standup',        date: '2026-04-23', time: '9:00 AM',  duration: '15 min', team: 'Phoenix' },
  { id: 'c2', name: 'Backlog Refinement',   date: '2026-04-23', time: '2:00 PM',  duration: '60 min', team: 'Phoenix' },
  { id: 'c3', name: 'Scrum of Scrums',      date: '2026-04-23', time: '10:00 AM', duration: '30 min', team: 'ART' },
  { id: 'c4', name: 'Sprint Review',        date: '2026-05-01', time: '1:00 PM',  duration: '60 min', team: 'Phoenix' },
  { id: 'c5', name: 'Retrospective',        date: '2026-05-01', time: '3:00 PM',  duration: '90 min', team: 'Phoenix' },
  { id: 'c6', name: 'System Demo',          date: '2026-05-29', time: '10:00 AM', duration: '2 hrs',  team: 'ART' },
  { id: 'c7', name: 'PI Planning',          date: '2026-06-10', time: '8:00 AM',  duration: '2 days', team: 'ART' },
];

// ── Retro Actions ─────────────────────────────────────────────────────────────
export const retroActions = [
  { id: 'r1', action: 'Automate regression test suite',              owner: 'Diego R.',  due: '2026-04-30', status: 'in-progress' },
  { id: 'r2', action: 'Add PR review SLA to team agreement',         owner: 'Ana C.',    due: '2026-04-25', status: 'done' },
  { id: 'r3', action: 'Schedule cross-team API contract review',     owner: 'Bel C.',    due: '2026-05-02', status: 'open' },
  { id: 'r4', action: 'Update definition of done for accessibility', owner: 'Felipe G.', due: '2026-04-28', status: 'open' },
];

// ── PI Velocity Trend (RTE) ───────────────────────────────────────────────────
export const velocityTrend = [
  { pi: 'PI 2025.3', planned: 200, actual: 188 },
  { pi: 'PI 2025.4', planned: 210, actual: 205 },
  { pi: 'PI 2026.1', planned: 220, actual: 214 },
  { pi: 'PI 2026.2', planned: 221, actual: null }, // current
];

// ── System Demo Readiness ─────────────────────────────────────────────────────
export const demoReadiness = [
  { team: 'Phoenix', ready: true,  featuresDemo: 3 },
  { team: 'Falcon',  ready: false, featuresDemo: 1 },
  { team: 'Titan',   ready: false, featuresDemo: 0 },
  { team: 'Horizon', ready: true,  featuresDemo: 2 },
];

// ── Requirements (BA) ─────────────────────────────────────────────────────────
export const requirements = [
  { id: 'REQ-201', title: 'MFA enrollment for existing customers',       epic: 'e2', status: 'needs-refinement', requestor: 'Security Team',  age: 4 },
  { id: 'REQ-202', title: 'Bulk user import via CSV',                    epic: 'e3', status: 'in-analysis',      requestor: 'Ops Team',        age: 2 },
  { id: 'REQ-203', title: 'Audit log export for compliance',             epic: 'e1', status: 'needs-refinement', requestor: 'Legal',           age: 8 },
  { id: 'REQ-204', title: 'API usage dashboard per client',              epic: 'e5', status: 'new',              requestor: 'Product Manager', age: 1 },
  { id: 'REQ-205', title: 'Dark mode for customer portal',               epic: 'e1', status: 'new',              requestor: 'UX Research',     age: 3 },
];

// ── Stakeholder Requests ──────────────────────────────────────────────────────
export const stakeholderRequests = [
  { id: 'SR-01', title: 'Add Portuguese language support',      from: 'VP Customer Success', date: '2026-04-18', priority: 'high',   status: 'pending' },
  { id: 'SR-02', title: 'Integration with Salesforce CRM',     from: 'Sales Director',      date: '2026-04-15', priority: 'medium', status: 'pending' },
  { id: 'SR-03', title: 'Custom branding per tenant',          from: 'Enterprise Account',  date: '2026-04-20', priority: 'medium', status: 'under-review' },
  { id: 'SR-04', title: 'GDPR data deletion endpoint',         from: 'Legal',               date: '2026-04-10', priority: 'high',   status: 'pending' },
];

// ── Story Readiness (BA) ──────────────────────────────────────────────────────
export const storyReadiness = {
  totalStories: 72,
  withAC: 51,
  readyForSprint: 38,
  inRefinement: 13,
  byEpic: [
    { epic: 'Customer Portal', total: 22, withAC: 19 },
    { epic: 'Auth Platform',   total: 18, withAC: 10 },
    { epic: 'Self-Service',    total: 15, withAC: 11 },
    { epic: 'Analytics',       total: 10, withAC: 10 },
    { epic: 'API Gateway',     total: 7,  withAC: 1  },
  ],
};

// ── Escalations (CPO) ─────────────────────────────────────────────────────────
export const escalations = [
  { id: 'ESC-01', title: 'ForgeRock license renewal decision needed', severity: 'high',   team: 'Titan',   raisedBy: 'SM Titan',    age: 7 },
  { id: 'ESC-02', title: 'Epic e5 blocked — architecture decision',   severity: 'high',   team: 'All',     raisedBy: 'RTE',         age: 3 },
  { id: 'ESC-03', title: 'Falcon team capacity — headcount request',  severity: 'medium', team: 'Falcon',  raisedBy: 'SM Falcon',   age: 5 },
];
