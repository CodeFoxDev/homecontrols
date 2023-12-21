let entityIds = [];

export function genEntityId() {
  let id = "e." + Math.random().toString(16).slice(2);
  if (entityIds.includes(id)) return genEntityId();
  entityIds.push(id);
  return id;
}