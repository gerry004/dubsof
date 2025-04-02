export interface JigsawPiece {
  id: number;
  title: string;
  shortTitle: string;
  initialPosition: { x: number; y: number; rotate: number };
  finalPosition: { x: number; y: number; rotate: number };
}

export type SidebarItemId = 'dashboard' | 'calendar' | 'messages' | 'settings';
export type TabId = 'clients' | 'projects' | 'employees'; 