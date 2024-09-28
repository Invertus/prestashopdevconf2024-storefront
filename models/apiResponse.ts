export interface ResponseMany<Entity> {
  totalItems: number;
  order_by: string;
  sortOrder: "asc" | "desc";
  limit: number;
  items: Entity[];
}
