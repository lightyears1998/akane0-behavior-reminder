import { EventEmitter } from "stream";

export type AgentEventEmitter = EventEmitter

export interface Agent {
  version: string

  install(emitter: AgentEventEmitter): void
  start(): void
  stop(): void
  uninstall(): void
}
